class CreateCards < ActiveRecord::Migration[6.0]
  def change
    create_table :cards do |t|
      t.string :text_orig
      t.string :text_localized
      t.string :locale

      t.timestamps
    end
  end
end
