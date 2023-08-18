set dotenv-load := false

# Generate components and build the bundle
build:
    npm run build

# Build the webpack bundle
build-js:
    npm run build:js

# Generate the components
generate:
    npm run build:backends

# Rebuild the bundle on change
watch:
    npm run watch

# Create a new python environment
venv:
    python -m venv venv
    . venv/bin/activate

# Install  pip requirements & node modules.
install:
    pip install -r requirements.txt
    npm install

# Package the application for distribution using python wheel.
package: clean build
    python -m build --wheel

# Publish the package to pypi using twine.
publish: package
    npm publish
    twine upload dist/*

# Remove dist & build directories
clean:
    rm -rf dist
    rm -rf build

# Remove generated code
clean-gen:
    rm -f Manifest.toml
    rm -f JuliaManifest.toml
    rm -rf inst
    rm -rf man
    rm -rf R
    rm -f DESCRIPTION
    rm -f NAMESPACE
    rm -rf deps
    rm -rf src/*.jl
    rm -rf src/jl
    rm -f Project.toml
    find dash_chat_components -type f -not -name '__init__.py' -delete
    rm -rf dash_chat_components/__pycache__
    rm -rf dash_chat_components.egg-info

# Format source code
format:
    npx prettier --write src/ts/