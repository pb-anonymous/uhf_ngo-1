export const resend = {
    emails: {
        send: async (options: { from: string; to: string | string[]; subject: string; html: string; text?: string }) => {
            const response = await fetch('https://api.resend.com/emails', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(options)
            });

            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(`Resend Error: ${errorText}`);
            }

            return response.json();
        }
    }
};