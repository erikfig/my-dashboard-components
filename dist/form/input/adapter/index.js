/* eslint-disable @typescript-eslint/no-explicit-any */
import { Toggle } from './toggle';
import { Checkbox } from './checkbox';
import { Radio } from './radio';
import { Select } from './select';
import { Textarea } from './textarea';
export var Adapters = {
    'checkbox': Checkbox,
    'select': Select,
    'radio': Radio,
    'textarea': Textarea,
    'toggle': Toggle,
};
