#!/bin/bash

echo '===>> Installing project dependencies' && \
npm install && \
echo && \
echo '===>> Removing frontend-starter git remote' && \
# git remote rm origin && \
printf '#!/bin/bash\nnpm install' > bin/setup.sh