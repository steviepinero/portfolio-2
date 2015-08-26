def fav_foods
	food_array = []
	3.times do 
		puts "Name a favorite food."
		food_array << gets.chomp
	end
	p food_array
	puts "Your favorite foods are #{food_array.join(", ")}."

	food_array.each do |food|
	puts "I like #{food} too!"
	end
	p food_array
	puts "This is a food array sorted #{food_array.sort}"
	puts "Displaying a reverse #{food_array.reverse}"
	puts "Let me narrow it down to 2 foods #{food_array.pop(1)}"
	puts "Heres some water to fill it in #{food_array.push('water')}"
	# new_food_array = food_array.split(". ")
	# p new_food_array
end
fav_foods

user_hash = { :name => "Steve", :password => "password5", :social_accounts => ["twitter", "facebook", "pinterest"]}
puts "User info and the word pinterest"
puts user_hash[:name]
puts user_hash[:password]
puts user_hash[:social_accounts][2]