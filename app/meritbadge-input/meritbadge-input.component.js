'use strict';
angular
    .module('meritbadgeInput')
        .component('meritbadgeInput', {
            templateUrl: 'meritbadge-input/meritbadge-input.template.html',
            controller: function () {
                var unselectedMeritbadges = ['American Business', 'American Cultures', 'American Heritage', 'American Labor', 'Animal Science', 'Animation', 'Archaeology', 'Archery', 'Architecture', 'Art', 'Astronomy', 'Athletics', 'Automotive Maintenance', 'Aviation', 'Backpacking', 'Basketry', 'Bird Study', 'Bugling', 'Camping', 'Canoeing', 'Chemistry', 'Chess', 'Citizenship in the Community', 'Citizenship in the Nation', 'Citizenship in the World', 'Climbing', 'Coin Collecting', 'Collections', 'Communication', 'Composite Materials', 'Cooking', 'Crime Prevention', 'Cycling', 'Dentistry', 'Digital Technology', 'Disabilities Awareness', 'Dog Care', 'Drafting', 'Electricity', 'Electronics', 'Emergency Preparedness', 'Energy', 'Engineering', 'Entrepreneurship', 'Environmental Science', 'Family Life', 'Farm Mechanics', 'Fingerprinting', 'Fire Safety', 'First Aid', 'Fish and Wildlife Management', 'Fishing', 'Fly Fishing', 'Forestry', 'Game Design', 'Gardening', 'Genealogy', 'Geocaching', 'Geology', 'Golf', 'Graphic Arts', 'Hiking', 'Home Repairs', 'Horsemanship', 'Indian Lore', 'Insect Study', 'Inventing', 'Journalism', 'Kayaking', 'Landscape Architecture', 'Law', 'Leatherwork', 'Lifesaving', 'Mammal Study', 'Medicine', 'Metalwork', 'Mining in Society', 'Model Design and Building', 'Motorboating', 'Moviemaking', 'Music', 'Nature', 'Nuclear Science', 'Oceanography', 'Orienteering', 'Painting', 'Personal Fitness', 'Personal Management', 'Pets', 'Photography', 'Pioneering', 'Plant Science', 'Plumbing', 'Pottery', 'Programming', 'Public Health', 'Public Speaking', 'Pulp and Paper', 'Radio', 'Railroading', 'Reading', 'Reptile and Amphibian Study', 'Rifle Shooting', 'Robotics', 'Rowing', 'Safety', 'Salesmanship', 'Scholarship', 'Scouting Heritage', 'Scuba Diving', 'Sculpture', 'Search and Rescue', 'Shotgun Shooting', 'Signs Signals and Codes', 'Skating', 'SmallBoat Sailing', 'Snow Sports', 'Soil and Water Conservation', 'Space Exploration', 'Sports', 'Stamp Collecting', 'Surveying', 'Sustainability', 'Swimming', 'Textile', 'Theater', 'Traffic Safety', 'Truck Transportation', 'Veterinary Medicine', 'Water Sports', 'Weather', 'Welding', 'Whitewater', 'Wilderness Survival', 'Wood Carving', 'Woodwork'];
                var selectedMeritbadges = [];

                var meritbadges = new Bloodhound({
                    datumTokenizer: Bloodhound.tokenizers.whitespace,
                    queryTokenizer: Bloodhound.tokenizers.whitespace,
                    local: unselectedMeritbadges
                })

                $('.typeahead').typeahead({
                    highlight: true
                },
                {
                    name: "meritbadges",
                    source: meritbadges
                })
            }
        });