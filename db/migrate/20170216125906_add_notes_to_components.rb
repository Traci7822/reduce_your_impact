class AddNotesToComponents < ActiveRecord::Migration
  def change
    add_column :components, :notes, :string
  end
end
