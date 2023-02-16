class Api::TicketsController < ApplicationController

    def index

    end

    def show
        if current_user
            @ticets = current_user.
        end

    end

    def create

    end

    def update

    end

    def destroy

    end

    private

    def ticket_params
        params.require(:ticket).permit(:user_id, :event_id, :num_tickets)
    end


end
