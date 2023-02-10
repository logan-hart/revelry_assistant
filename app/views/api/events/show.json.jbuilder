json.event do 
    json.partial! '/api/events/event', event: @event
end

# json.user do
#     json.partial! '/api/users/user', user: @event.user
# end