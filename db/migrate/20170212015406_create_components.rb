class CreateComponents < ActiveRecord::Migration
  def change
    create_table :components do |t|
      t.string :name
      t.belongs_to :topic
      t.timestamps null: false
    end
  end
end
