import { ToggleModule } from '../../solve/toggle/toggle.js';
import { FilterModule } from '../../solve/filter/filter.js';

export const JsLoadRouter = (title) => {
    if (title === 'Toggle Task') ToggleModule();
    if (title === 'Filter Task') FilterModule();
}