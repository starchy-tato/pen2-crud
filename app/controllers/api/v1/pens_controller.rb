class Api::V1::PensController < ApplicationController
  def index
    render json: Pen.all
  end

  def create
    @pen = Pen.new(pen_params)

    if @pen.save
      render json: @pen
    else
      render json: {error: 'Requires a name'}
    end

  end

  def destroy
    Pen.destroy(params[:id])
  end

  def update
    pen = Pen.find(params[:id])
    pen.update(pen_params)
    render json: pen
  end

  private

  def pen_params
    params.require(:pen).permit( :name, :description)
  end
end
