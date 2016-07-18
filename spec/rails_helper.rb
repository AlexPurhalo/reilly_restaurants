ENV['RAILS_ENV'] ||= 'test'
require File.expand_path('../../config/environment', __FILE__)

abort("The Rails environment is running in production mode!") if Rails.env.production?

# Requirement Files
require 'spec_helper'
require 'rspec/rails'
require 'simplecov'
require 'database_cleaner'
require 'capybara/poltergeist'

# Simple Cov Configurations
SimpleCov.start


ActiveRecord::Migration.maintain_test_schema!


# Capybara Configurations
Capybara.asset_host = 'http://localhost:4000'
Capybara.register_driver :poltergeist do |app|
  Capybara::Poltergeist::Driver.new(
      app,
      debug: false,
      inspector: true,
      js_errors: true,
      window_size: [1024, 768]
  )
end
Capybara.javascript_driver = :poltergeist


# Rspec Configurations
RSpec.configure do |config|
  # Database Cleaner
  config.before(:suite) do
    DatabaseCleaner.strategy = :truncation
    DatabaseCleaner.clean_with :truncation
  end

  config.around(:each) do |example|
    DatabaseCleaner.cleaning do
      example.run
    end
  end

  # Capybara
  config.include Capybara::DSL

  # Default Stuff
  config.fixture_path = "#{::Rails.root}/spec/fixtures"

  config.use_transactional_fixtures = false

  config.infer_spec_type_from_file_location!

  config.filter_rails_from_backtrace!
end

# Coverage Additional Abilities
Rails.application.eager_load! if ENV['COVERAGE']