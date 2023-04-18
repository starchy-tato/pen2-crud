require 'rails_helper'

describe 'GET #index', :type => :request do

  let!(:pen_one) { FactoryBot.create(:pen, name: 'Pilot Metropolitan', description: 'a classy fountain pen, with a fine nib' ) }
  let!(:pen_two) { FactoryBot.create(:pen, name: 'Bic Ballpoint', description: 'kinda basic') }

  before {get '/api/v1/pens'}

  it 'returns status code 200' do
    expect(response).to have_http_status(:success)
  end

  it 'returns all pens' do
    json_response = JSON.parse(response.body)

    expect(json_response.size).to eq(2)
    expect(json_response[0]['name']).to eq 'Pilot Metropolitan'
    expect(json_response[0]['description']).to eq pen_one.description
    expect(json_response[1]['name']).to eq 'Bic Ballpoint'
    expect(json_response[1]['description']).to eq pen_two.description
  end

end
