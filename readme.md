
# Instructions to run  

Must have node, npm/yarn installed
```bash
npm install
npm run dev
```

### Usage
- Import the package in your app:
```js
import {useAdoptMe} from 'adoptme-hook';
```
- Get the animal information from the hook:
```js
const {loading,error,animal} = useAdoptMe('name')
```
