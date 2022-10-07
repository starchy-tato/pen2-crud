FactoryBot.define do
  factory :pen do
    name { FFaker::Lorem.word }
    description { FFaker::Lorem.sentence }
  end
end
