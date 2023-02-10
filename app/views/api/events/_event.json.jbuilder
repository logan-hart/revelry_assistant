json.extract! event, 
    :id,
    :name, 
    :start_date, 
    :end_date, 
    :start_time, 
    :end_time, 
    :lineup, 
    :genres, 
    :details, 
    :cost, 
    :age_minimum, 
    :images, 
    :promotional_links, 
    :media, 
    :available_tickets, 
    :promoter_id,
    :tickets_sold

if event.photo.attached?
    json.photo_url url_for(event.photo) 
else
    json.photo_url "https://imgproxy.ra.co/_/quality:66/w:1500/rt:fill/aHR0cHM6Ly9pbWFnZXMucmEuY28vMDhkOGNmYmNiMjExMzIxMGRhZmFmZjQ1YzgyMzQ2NDA3ZmQ4ZGNkNC5wbmc="
end