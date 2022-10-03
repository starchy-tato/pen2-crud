class CreatePens < ActiveRecord::Migration[6.1]
  def change
    create_table :pens do |t|
      t.string :name
      t.text :description

      t.timestamps
    end
  end
end
