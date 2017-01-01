require 'rails_helper'

RSpec.describe BooksController, type: :controller do
  render_views
  describe "GET 'index' " do
    it "returns a successful 200 response" do
      get :index, format: :json
      expect(response).to be_success
    end

    it "returns all the books" do
      get :index, format: :json
      parsed_response = JSON.parse(response.body)
      expect(parsed_response.length).to eq(3)
    end
  end
  describe "GET 'show' " do
    before(:each) do
      @id = 1
    end
    context "Check return status" do
      it "returns a successful 200 response" do
        get :show, :id => @id, format: :json
        expect(response).to be_success
      end
    end
    context "Check return data" do
      it "returns '/books/1.json'" do
        get :show, :id => @id, format: :json
        parsed_response = JSON.parse(response.body)
        expect(parsed_response["id"]).to eq(1)
      end
      it "returns '/books/1.json'" do
        get :show, :id => @id, format: :json
        parsed_response = JSON.parse(response.body)
        expect(parsed_response["name"]).to eq(Book.find(1).name)
      end
    end
  end
  describe "POST 'create' " do
    before(:each) do
      @id = 1
    end
    context "Check return status" do
      it "returns a successful 200 response" do
        get :show, :id => @id, format: :json
        expect(response).to be_success
      end
    end
    context "Check return data" do
      it "returns '/books/1.json'" do
        get :show, :id => @id, format: :json
        parsed_response = JSON.parse(response.body)
        expect(parsed_response["id"]).to eq(1)
      end
      it "returns '/books/1.json'" do
        get :show, :id => @id, format: :json
        parsed_response = JSON.parse(response.body)
        expect(parsed_response["name"]).to eq(Book.find(1).name)
      end
    end
  end
end
