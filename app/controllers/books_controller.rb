class BooksController < ApplicationController
  protect_from_forgery with: :null_session, if: Proc.new { |c| c.request.format == 'application/json' }
  before_action :set_book, only: [:show, :edit, :update, :destroy, :update_status]

  # GET /books
  # GET /books.json
  def index
    @books = Book.includes(:author).order(:id)
  end
	def home
    @books = {books: Book.includes(:author).order(:id).as_json(methods: [:author_name])}
	end
  # GET /books/1
  # GET /books/1.json
  def show
  end

  # GET /books/new
  def new
    @book = Book.new
    @author = @book.build_author
  end

  # GET /books/1/edit
  def edit
  end

  # POST /books
  # POST /books.json
  def create
    @book = Book.new(book_params)

    respond_to do |format|
      if @book.save
        @books=Book.includes(:author).order(:id)
        format.html { redirect_to @book, notice: 'Book was successfully created.' }
        format.json { render action: :index, status: :created }
      else
        format.html { render :new }
        format.json { render json: @book.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /books/1
  # PATCH/PUT /books/1.json
  def update
    respond_to do |format|
      if @book.update(book_params)
        @books=Book.includes(:author).order(:id)
        format.html { redirect_to @book, notice: 'Book was successfully updated.' }
        format.json { render action: :index, status: :ok, location: @book }
      else
        format.html { render :edit }
        format.json { render json: @book.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /books/1
  # DELETE /books/1.json
  def destroy
    @book.destroy
    respond_to do |format|
      format.html { redirect_to books_url, notice: 'Book was successfully destroyed.' }
      format.json { head :no_content }
    end
  end
  def update_status
    status = params[:status]
    respond_to do |format|
      if @book.update(book_params)
        @books=Book.includes(:author).order(:id)
        format.html { redirect_to @book, notice: 'Book was successfully updated.' }
        format.json { render action: :index, status: :ok, location: @book }
      else
        format.html { render :edit }
        format.json { render json: @book.errors, status: :unprocessable_entity }
      end
    end
  end
  private
    # Use callbacks to share common setup or constraints between actions.
    def set_book
      @book = Book.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def book_params
      params.require(:book).permit(:name, :status, author_attributes: [:name])
    end
end
