require 'omniauth'
require 'omniauth-oauth2'
require 'omniauth-google-oauth2'
require 'omniauth-facebook'

use OmniAuth::Builder do
  config = YAML.load_file 'config/config.yml'
  provider :google_oauth2, config['identifier'], config['secret']
  provider :facebook, config['idfacebook'], config['secretfacebook']

end

get '/auth/:provider/callback' do

  session[:auth] = @auth = request.env['omniauth.auth']
  session[:name] = @auth['info'].name
  session[:image] = @auth['info'].image
  
  flash[:notice] = %Q{<div class="success">Autenticado en #{@auth.provider} como #{@auth['info'].name}.</div>}
  redirect '/'
end

get '/auth/failure' do
  flash[:notice] = params[:message] 
  redirect '/'
end