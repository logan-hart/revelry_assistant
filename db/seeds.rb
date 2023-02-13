# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

ApplicationRecord.transaction do 
    puts "Destroying tables..."
    # Unnecessary if using `rails db:seed:replant`
    User.destroy_all
    Event.destroy_all
  
    puts "Resetting primary keys..."
    # For easy testing, so that after seeding, the first `User` has `id` of 1
    ApplicationRecord.connection.reset_pk_sequence!('users')
    ApplicationRecord.connection.reset_pk_sequence!('events')  

    puts "Creating users..."
    # Create one user with an easy to remember username, email, and password:
    User.create!(
      firstname: 'demo',
      surname: 'user',
      email: 'demo@user.com', 
      username: 'DemoUser', 
      password: 'password',
      age: 21,
      subscribed: true
    )
  
    # More users
    10.times do 
      User.create!({
        firstname: Faker::Name.first_name,
        surname: Faker::Name.last_name,
        email: Faker::Internet.unique.email,
        username: Faker::Internet.unique.username(specifier: 3),
        password: 'password',
        age: rand(16...50)
      }) 
    end

    puts "Creating events..."
    Event.create!(
      name: 'demoEvent',
      start_date: '2023-04-23',
      end_date: '2023-04-23',
      start_time: '20:00',
      end_time: '24:00',
      cost: 50,
      age_minimum: 21,
      promoter_id: 1,
      lineup: ['Disclosure', 'Odesza', 'Martin Garix', 'Oliver Heldens'],
      tickets_sold: 450,
      venue: 'Basement'

    )

    20.times do 
      Event.create!({
        name: Faker::Company.name,
        start_date: Faker::Time.between(from: Time.now, to: Time.now + 1.month),
        end_date: '2023-04-23',
        start_time: '20:00',
        end_time: '24:00',
        cost: rand(25..100),
        lineup: [(Faker::Hacker.verb).capitalize + " " + Faker::Name.first_name, (Faker::Hacker.verb).capitalize + " " + Faker::Name.first_name], 
        age_minimum: rand(18..21),
        promoter_id: rand(1..10),
        tickets_sold: rand(1..450),
        venue: Faker::Address.city_suffix + " " + Faker::Hacker.noun

      }) 
    end
  
    puts "Done!"
  end