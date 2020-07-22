# Html to Canvas

## Usage
### Step 1
`
$ npm install https://github.com/Pham-Gia-Huong/html-to-canvas.
`
### Step 2 
`
import {htmlToCanvas} from 'html-to-canvas';

document.addEventListener('DOMContentLoaded', async () => {

  let div = document.createElement("div") as HTMLElement;</br>
  div.textContent = "example";

  document.body.appendChild(div);

  const canvas = htmlToCanvas(div);</br>
  document.body.appendChild(canvas);
  
});

`

## Contributing

### Requirement
```
* Node.js
* Git
```

```
$ git clone git@github.com:Pham-Gia-Huong/html-to-canvas.git
$ cd html-to-canvas
$ npm install
$ npm run build
```

#### Output
```
./lib/esm
```