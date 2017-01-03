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
      expect(json.length).to eq(3)
    end
  end
  describe "GET 'show' " do
    before(:each) do
      @id = 1
    end
    context "Check return status" do
      it "returns a successful 200 response" do
        get :show, params:{:id => @id}, format: :json
        expect(response).to be_success
      end
    end
    context "Check return data" do
      it "returns '/books/1.json'" do
        get :show, params:{:id => @id}, format: :json
        expect(json["id"]).to eq(1)
      end
      it "returns '/books/1.json'" do
        get :show, params:{:id => @id}, format: :json
        expect(json["name"]).to eq(Book.find(1).name)
      end
    end
  end
  describe "POST 'create' " do
    let(:author_attributes) { FactoryGirl.attributes_for(:author) }
    let(:book_attributes) { FactoryGirl.attributes_for(:book, author_attributes: author_attributes) }
    before(:each) do
      request.headers['Content-Type'] = 'application/json'
      process :create, method: :post, params: { book: book_attributes, format: :json }
    end
    context "Check return status" do
      it "returns name equal" do
        pp book_attributes
        expect(json["name"]).to eq(book_attributes[:name])
      end
    end
  end
  describe "PUT 'books/:id' " do
    let(:book) { Book.first}
    before(:each) do
      request.headers['ACCEPT'] = 'application/json'
      request.headers['Content-Type'] = 'application/json'
    end
    context "Check Update all" do
      it "returns author name equal" do
        params = {"name"=>"aaaa", "status"=>2, :author_attributes=>{:name=>"Alex"}}
        process :update, method: :put, params: {:id => book.id,  book: params}, format: :json
        expect(json["name"]).to eq(params["name"])
        expect(json["status"]).to eq("finished")
        expect(json["author"]["name"]).to eq("Alex")
      end
    end

    describe "Delete 'books/:id' " do
      let(:book) { Book.first}
      before(:each) do
        request.headers['Content-Type'] = 'application/json'
      end
      context "Delete Book" do
        it "returns author name equal" do
          process :destroy, method: :delete, params: {:id => book.id}, format: :json
          expect(response.body).to eq("")
        end
      end
    end
  end
end
