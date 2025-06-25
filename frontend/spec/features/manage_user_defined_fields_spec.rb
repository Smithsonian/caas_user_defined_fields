# frozen_string_literal: true

require 'spec_helper.rb'
require 'rails_helper.rb'

describe 'Manage user defined fields', js: true do
  before(:each) do
    login_admin
  end

  context 'when creating a resource' do
    it 'does not show User Defined in subrecords or sidebar' do
      visit "resources/new"
      wait_for_ajax

      expect(page).not_to have_text 'User Defined'
    end
  end

  context 'when creating a digital object' do
    it 'shows only custom digital object fields' do
      visit "digital_objects/new"
      wait_for_ajax

      expect(page).to have_text 'User Defined'

      click_on 'Add User Defined Fields'

      expect(page).to have_css '#digital_object_user_defined_ > div > ul > li.initialised'
      expect(page).to have_text 'DO Import RefID'

      expect(page).not_to have_text 'Museum Accession ID'
      expect(page).not_to have_text 'Boolean 1'
      expect(page).not_to have_text 'Text 1'
    end
  end

  context 'when creating an accession' do
    it 'shows only custom accession fields' do
      visit "accessions/new"
      wait_for_ajax

      expect(page).to have_text 'User Defined'

      click_on 'Add User Defined Fields'

      expect(page).to have_text 'Electronic Media?'
      expect(page).to have_text 'Arrival Date'
      expect(page).to have_text 'Museum Accession ID'
      expect(page).to have_text 'New or Addition?'

      expect(page).not_to have_text 'DO Import RefID'
      expect(page).not_to have_text 'Boolean 1'
      expect(page).not_to have_text 'Text 1'
    end
  end
end