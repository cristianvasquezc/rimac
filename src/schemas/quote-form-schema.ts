import z from 'zod';

export const quoteFormSchema = z.object({
  dni: z
    .string()
    .min(1, 'Ingresa un número valido.')
    .max(8, 'No debe exceder los 8 caracteres.'),
  phone: z
    .string()
    .min(1, 'Ingresa un número de teléfono válido.')
    .max(12, 'El número de teléfono no debe exceder los 12 caracteres.'),
  privacyPolicy: z.boolean().refine((value) => value === true, {
    message: 'Debes aceptar la política de privacidad.',
  }),
  marketingConsent: z.boolean().refine((value) => value === true, {
    message: 'Debes aceptar el consentimiento de marketing.',
  }),
});
