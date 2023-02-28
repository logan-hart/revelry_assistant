class Api::TicketsController < ApplicationController

    before_action :require_logged_in, only: [:index, :show, :update, :destroy]

    def index
        if params['user_id']
            @tickets = Ticket.where(user_id: params['user_id'])
        end
    end

    def show
        @ticket = Ticket.find(params[:id])
    end

    def create
        @ticket = Ticket.new(ticket_params)

        if @ticket.save
            render :show
        else
            render json: {errors: @review.errors.full_messages}, status: :unprocessable_entity
        end
    end

    def update

    end

    def destroy
        @ticket = Ticket.find(params[:id])

        unless @ticket
            render json: { message: 'Unauthorized'}, status: :unauthorized
            return
        end

        @ticket.destroy
        render :show
    end

    private

    def ticket_params
        params.require(:ticket).permit(:user_id, :event_id, :num_tickets)
    end


end
