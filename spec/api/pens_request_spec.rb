require 'rails_helper'

describe 'get all pens route', :type => :request do
  let!(:name) { FactoryBot.create_list(:pen, 4) }

  before {get '/api/v1/pens'}

  it 'returns all pens' do
    expect(JSON.parse(response.body).size).to eq(4)
  end

  it 'returns status code 200' do
    expect(response).to have_http_status(:success)
  end

end
