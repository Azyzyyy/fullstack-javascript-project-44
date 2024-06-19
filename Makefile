install:
	npm ci

brain-games:
	node bin/brain-games.js

publish:
	npm publish --dry-run

test:
	npm test

lint:
	npx eslint .