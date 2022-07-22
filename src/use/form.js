import { ref, reactive, computed } from 'vue';
import { useField } from './filed';

export function useForm(init={}) {
    const form = reactive({});

    for(const [key, value] of Object.entries(init)) {
        form[key] = useField(value);
    }

    form.valid = computed(() => {
        return Object.keys(form)
            .filter(k => k !== 'valid')
            .some(k => form[k].valid)
    });

    return form;
}