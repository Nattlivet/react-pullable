# react-pully
React pull-to-refresh with promises.

## Installation
``` bash
$ yarn add @nattlivet/react-pully
# or
$ npm add @nattlivet/react-pully
```

## Usage
``` tsx
import Pully from '@nattlivet/react-pully';

const MyComponent = () => {
    return (
        <div className="MyComponent">
            <Pully>
            </Pully>
        </div>
    ):
}

export default MyComponent;
```

### Component styles
To prevent Chrome overscroll set `overscroll-behavior-y: contain [or] none;` on `<body>` ([learn more](https://developers.google.com/web/updates/2017/11/overscroll-behavior)).

### Props
| Prop | Required | Type | Default | Description |
| :--- | :--- | :--- | :--- | :--- |
| onRefresh | true | Function | undefined | Called when a pull is triggered |
| className | false | String | `pullable` | Class applied to the component |
| distThreshold | false | Number | `72` | Distance where refresh is triggered |
| resistance | false | Number | `2.5` | How hard it is to pull down |
| disabled | false | Boolean | false | Disables all functionality |

## Credits
Inspired by [react-pullable](https://github.com/sconstantinides/react-pullable) ❤️
