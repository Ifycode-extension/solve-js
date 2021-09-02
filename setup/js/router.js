import { ToggleModule } from '../../solve/toggle/toggle.js';
import { FilterModule } from '../../solve/filter/filter.js';

export const JsLoadRouter = (h1) => {
    if (h1.innerHTML === 'Toggle Task') ToggleModule();
    if (h1.innerHTML === 'Filter Task') FilterModule();
}