FROM kyma/docker-nginx
ADD dist /var/www

EXPOSE 80

CMD 'nginx'