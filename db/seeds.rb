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
      name: 'Demo Event',
      start_date: '2023-04-23',
      end_date: '2023-04-23',
      start_time: '20:00',
      end_time: '04:00',
      cost: 50,
      genres: ['House', 'Techno'],
      age_minimum: 21,
      promoter_id: 1,
      lineup: ['Disclosure', 'Odesza', 'Martin Garix', 'Oliver Heldens'],
      tickets_sold: 450,
      venue: 'Basement',
      details: "Battle Hymn is happening on a special Holiday Weekend again!!!  Sunday, February 19th, 2023! /n  With Grammy award winner HEX HECTOR and Battle Hymn family MICHAEL MAGNAN!  Like all holiday Battles, this will be a busy one so make sure to come early and stay late!  ------------------------------------------------------------------------------------------ This event is 21+  *Early entry tickets are valid for 9-10 pm entry. After 10 pm entry will only be permitted if capacity allows. The difference of door price applies.",
      images: "https://imgproxy.ra.co/_/quality:66/w:1500/rt:fill/aHR0cHM6Ly9pbWFnZXMucmEuY28vOWJhMTlmYjVjYjgyNTAxZTMxNTcwNTY5ZmIzYjFiN2RmN2Q2MTg2Yi5wbmc=",
    )

    posters=[
      "https://imgproxy.ra.co/_/quality:66/w:1500/rt:fill/aHR0cHM6Ly9pbWFnZXMucmEuY28vOWU3NTAwYTkxYTAyY2NmZTM3MGQ2ZDljNDI2NTUzYzI5ZTJhZmQ0ZC5qcGc=",
      "https://imgproxy.ra.co/_/quality:66/w:1500/rt:fill/aHR0cHM6Ly9pbWFnZXMucmEuY28vMzQxMDgyZDc4OGQ1ZjcxZDNmZTZmNjdjZTIzZTNiNDUwYzUwOTgxZS5qcGc=",
      "https://imgproxy.ra.co/_/quality:66/w:1500/rt:fill/aHR0cHM6Ly9pbWFnZXMucmEuY28vZmZkMmVjYmJiOTQ4NTE2ZGNiYzc0MWQ0NDNiOWUxNmEwNmY3ZjY1YS5wbmc=",
      "https://imgproxy.ra.co/_/quality:66/w:1500/rt:fill/aHR0cHM6Ly9pbWFnZXMucmEuY28vMGY5NGVkNzZjMTA0ZWE0ZTdiMmIxMGRkMmM5MWVjNTY3ZTgzZTYzZS5qcGc=",
      "https://imgproxy.ra.co/_/quality:66/w:1500/rt:fill/aHR0cHM6Ly9pbWFnZXMucmEuY28vZjg5NmYyYmYxZWIzOGIzNWJkMTVmOGFlYjE3YTkyMmMxZjNkNTE5MS5qcGc=",
      "https://imgproxy.ra.co/_/quality:66/w:1500/rt:fill/aHR0cHM6Ly9pbWFnZXMucmEuY28vYzc3ZmZkNjc4YTFhZDcyNTFhYzUwNWQ0ODUwNGYzYmRmNGM1OTNiYy5qcGc=",
      "https://imgproxy.ra.co/_/quality:66/w:1500/rt:fill/aHR0cHM6Ly9pbWFnZXMucmEuY28vMDlhMzQyZGZmNTY5YWI5OWYxZTE0ZDAyMzhlNGYzODk0NTViZmVhNy5qcGc=",
      "https://imgproxy.ra.co/_/quality:66/w:1500/rt:fill/aHR0cHM6Ly9pbWFnZXMucmEuY28vOTFkOTQ2NjU0OGZhYzMwMTA3ZDMyNzdiNTFjNzM5M2YwNjM5NmM0ZS5qcGc=",
      "https://imgproxy.ra.co/_/quality:66/w:1500/rt:fill/aHR0cHM6Ly9pbWFnZXMucmEuY28vYTZkNjkxMGFmMjkxMDZhNzkyZTVmOWY4YzkxZDM0NDBmZmVmOWM1Zi5qcGc=",
      "https://imgproxy.ra.co/_/quality:66/w:1500/rt:fill/aHR0cHM6Ly9pbWFnZXMucmEuY28vNGM5N2MzYTI3MWFlYWE1MDY2MGE2ZmQ5MTA2NmI5YWRjMzhmMDcxZS5wbmc=",
      "https://imgproxy.ra.co/_/quality:66/w:1500/rt:fill/aHR0cHM6Ly9pbWFnZXMucmEuY28vYjkwMmY4OWU0MWQxY2RjODQ3NDBkZTk2MTE4ZGFjMDMzM2UyZTYwMi5qcGc=",
      "https://imgproxy.ra.co/_/quality:66/w:1500/rt:fill/aHR0cHM6Ly9pbWFnZXMucmEuY28vMjUyZTUxMGQ5NTVhODAxOTM4N2QxMGZhZWM3Zjk2MDI1NWFiYWE2Yi5qcGc=",
      "https://imgproxy.ra.co/_/quality:66/w:1500/rt:fill/aHR0cHM6Ly9pbWFnZXMucmEuY28vMjY4MTM5YzA3NTZmODc5ZWQzMjI1MDI4MjE3YmRkNTFjMzg5ODU5ZS5qcGc=",
      "https://imgproxy.ra.co/_/quality:66/w:1500/rt:fill/aHR0cHM6Ly9pbWFnZXMucmEuY28vNDc0YjMyMjBmZjEzNjYyMGI2ZmE4MjcxM2E0NjMzMDU1M2QwNWFlNS5qcGc=",
      "https://imgproxy.ra.co/_/quality:66/w:1500/rt:fill/aHR0cHM6Ly9pbWFnZXMucmEuY28vNWNmNDBlYjBlNjgyODMxNGVmMWY2MTUwNmZkNWM4ZDdmM2ZkODUwMi5qcGc=",
      "https://imgproxy.ra.co/_/quality:66/w:1500/rt:fill/aHR0cHM6Ly9pbWFnZXMucmEuY28vYmU1ZTZjNDE1NDhiNDhiYWVmZTE0YjczMDNlNzQyMGRmMTlmYTdjZS5qcGc=",
      "https://imgproxy.ra.co/_/quality:66/w:1500/rt:fill/aHR0cHM6Ly9pbWFnZXMucmEuY28vMTcxMDRiYjc3MTU3MDhhNTYzNDgwY2VkNjBmNTA4NWFmZDIzYmY4Ni5qcGc=",
      "https://imgproxy.ra.co/_/quality:66/w:1500/rt:fill/aHR0cHM6Ly9pbWFnZXMucmEuY28vYWI3YzVjZDNmZTUxZjkwYzc2MWY1MGVmNDE4MWVkNTgyNzc5NjFjOS5qcGc=",
      "https://imgproxy.ra.co/_/quality:66/w:1500/rt:fill/aHR0cHM6Ly9pbWFnZXMucmEuY28vYWYzYzdkYjVmZTA0Zjg3OTQ2Y2QyY2M2ZjNlNjZlOWQzNTFiMjQ0NS5qcGc=",
      "https://imgproxy.ra.co/_/quality:66/w:1500/rt:fill/aHR0cHM6Ly9pbWFnZXMucmEuY28vNWFlYzU5MjE1ZWRkMGI3ZjBhOTQ2NzIzMjg2ZGM5Nzg0ODcyNjUyZS5qcGc=",





    ]

    genres_options=['Acid', 'Afrobeat', 'Baile Funk', 'Bass', 'Breakcore', 'Club', 'Dancehall', 'Deep House', 'Dembow', 'Disco', 'Drum & Bass', 'Dub', 'Electro', 'Experimental', 'Funk/Soul', 'Hip-Hop', 'House', 'Italo Disco', 'Jungle', 'Latin Bass', 'Minimal', 'Neo Perreo', 'Pop', 'Progressive House', 'Reggaeton', 'R&B', 'Tech House', 'Techno', 'Trance']

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
        venue: (Faker::Address.city_suffix).capitalize + " " + (Faker::Hacker.noun).capitalize,
        images: posters.shift,
        genres: [genres_options.sample(rand(1...3))],
        details: 'None'
      }) 
    end
  
    puts "Done!"
  end