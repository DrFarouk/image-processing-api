# Image Processing API

## Overview

API that resizing images & place it into frontend with the size set via URL parameters.

## How to build and start the server

### 1. Install all dependencies

`npm i`

### 2. Build

`npm run build`

### 3. Start the Server

`npm run start`

(will start running on port `4000`).

## Testing and Linting

### 1. Linting

`npm run lint`

### 2. Testing

`npm run test`

## Endpoint

### `/api/images?filename=<image_name>&width=<width>&height=<height>`

Method: `get`

URL Params: `height` and `width` - the height or width of the image in pixels

Query Param: `filename` - the specific image you are requesting.

    For example: `http://localhost:4000/api/images?filename=fjord&width=900&height=900`

#### Available Image options

1. `encenadaport`
2. `fjord`
3. `icelandwaterfall`
4. `palmtunnel`
5. `santamonica`

### Functionality

- User can query endpoint using various params and queries to retrieve an image with a specified height and width.

- All images requested will be saved to disk.

- There is a cache layer. If a user requests an image size that has already been requested, there is no need for resizing and the previously resized image will be returned.