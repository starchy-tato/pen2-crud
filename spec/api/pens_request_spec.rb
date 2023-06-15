require 'rails_helper'

describe 'GET /index', :type => :request do
  let!(:pen_one) { FactoryBot.create(:pen, name: 'Pilot Metropolitan', description: 'a classy fountain pen, with a fine nib') }
  let!(:pen_two) { FactoryBot.create(:pen, name: 'Bic Ballpoint', description: 'kinda basic') }

  before { get '/api/v1/pens' }

  it 'returns successful status' do
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

describe 'POST /create', :type => :request do
  let(:name) { 'Safari' }
  let(:description) { 'vibrant colour' }

  subject { post api_v1_pens_path, params: { pen: { name: name, description: description } } }

  context 'with valid params' do
    it 'creates a new pen' do
      expect { subject }.to change { Pen.count }.by(1)
      pen = Pen.last
      expect(pen.name).to eq("Safari")
      expect(pen.description).to eq("vibrant colour")
    end
  end

  context 'with invalid params' do
    let(:name) { '' }

    it 'does not create a new pen' do
      expect { subject }.not_to change {Pen.count}
    end
  end
end

describe 'DELETE /destroy', :type => :request do
  let!(:pen) { FactoryBot.create(:pen, name: 'Zebra', description: 'Sparkling gel pen') }

  subject { delete "/api/v1/pens/#{pen.id}", params: { pen: pen.id } }

  context 'it deletes a pen successfully' do
    it 'destroys the pen' do
      expect {
        subject
      }.to change(Pen, :count).by(-1)
    end

    it 'returns a successful response' do
      delete "/api/v1/pens/#{pen.id}"
      expect(response).to have_http_status(:ok)
    end
  end

  # is this spec needed?
  context 'it does not delete pen successfully' do
    let!(:pen) { nil }

    xit 'returns a not found response' do
      delete "/api/v1/pens/#{pen.id}"
      expect(response).to have_http_status(:not_found)
    end
  end
end

describe 'PUT /update', :type => :request do
  let!(:pen){ FactoryBot.create(:pen, name: 'Muji', description: 'dependable and well known') }
  let(:description) { 'perhaps a bit over hyped' }

  subject { put api_v1_pen_path(pen.id), params: {pen: { description: description}} }

  context 'it updates the pen description' do
    it 'returns the updated pen description' do
      expect {
        subject
        pen.reload
      }.to change {pen.description}.to(description)

      expect(response).to have_http_status(:ok)
      json_response = JSON.parse(response.body)
      expect(json_response['description']).to eq(description)
    end
  end
end
