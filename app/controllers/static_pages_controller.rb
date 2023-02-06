class StaticPagesController < ApplicationController::Base
    def frontend_index
        render file: rails.root.join('public', 'index.html')
    end
end