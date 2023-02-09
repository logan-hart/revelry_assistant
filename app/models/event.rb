class Event < ApplicationRecord
    validates :name, :start_date, :end_date, :start_time, :end_time, :cost, :age_minimum, presence:true
    #validations for start and end date/time here

    belongs_to :user, foreign_key: :promoter_id, class_name: :User

    # def remaining_tickets
    #     available_tickets - tickets_sold
    # end

end
