class Api::V1::PensController < ApplicationController
  def index
    render json: Pen.all
  end

  def create
    pen = Pen.create(pen_params)
    render json: pen
  end

  def destroy
    Pen.destroy(params[:id])
  end

  def update
    pen = Pen.find(params[:id])
    pen.update_attributes(pen_params)
    render json: pen
  end

  private

  def pen_params
    params.require(:pen).permit(:id, :name, :description)
  end
end
