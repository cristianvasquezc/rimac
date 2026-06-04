import z from 'zod';

export const quoteFormSchema = z
  .object({
    documentType: z.enum(['dni', 'ce']),
    document: z.string().min(1, 'Ingresa un documento válido.'),
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
  })
  .superRefine((data, ctx) => {
    if (data.documentType === 'dni') {
      if (data.document.length !== 8) {
        ctx.addIssue({
          code: 'custom',
          message: 'El DNI debe tener exactamente 8 dígitos.',
          path: ['document'],
        });
      } else if (!/^\d+$/.test(data.document)) {
        ctx.addIssue({
          code: 'custom',
          message: 'El DNI debe contener solo números.',
          path: ['document'],
        });
      }
    } else if (data.documentType === 'ce') {
      if (data.document.length > 10) {
        ctx.addIssue({
          code: 'custom',
          message: 'El C.E. debe tener como máximo 10 dígitos.',
          path: ['document'],
        });
      }
    }
  });
