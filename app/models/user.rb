class User < ApplicationRecord
  has_secure_password

  validates :username, 
  uniqueness: true, 
    presence: true,
    length: { in: 3..30, message: 'too short' }, 
    format: { without: URI::MailTo::EMAIL_REGEXP, message:  "can't be an email" }
  validates :email, 
    uniqueness: true,  
    presence: true,
    format: { with: URI::MailTo::EMAIL_REGEXP }
  validates :session_token, presence: true, uniqueness: true
  validates :password, length: { in: 6..255, message: 'must be more than 6 characters' }, allow_nil: true
  validates :firstname, :surname, presence: true

  before_validation :ensure_session_token

  has_many :events, foreign_key: :promoter_id, dependent: :destroy
  has_many :tickets, foreign_key: :user_id, dependent: :destroy

  def self.find_by_credentials(credential, password)
    field = credential =~ URI::MailTo::EMAIL_REGEXP ? :email : :username
    user = User.find_by(field => credential)
    user&.authenticate(password)
  end

  def reset_session_token!
    self.update!(session_token: generate_unique_session_token)
    self.session_token
  end

  private

  def generate_unique_session_token
    loop do
      token = SecureRandom.base64
      break token unless User.exists?(session_token: token)
    end
  end

  def ensure_session_token
    self.session_token ||= generate_unique_session_token
  end

end

