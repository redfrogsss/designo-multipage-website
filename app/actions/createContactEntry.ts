"use server";

export const createContactEntry = (formData: any) => {
    return new Promise(async (resolve, reject) => {

        const name = formData.name as string;
        const email = formData.email as string;
        const phone = formData.phone as string;
        const message = formData.message as string;

        console.log(`${process.env.cms_path}contact-form-responses`);

        const data = {
            data: {
                name,
                email,
                phone,
                message,
            }
        }
        

        try {
            const response = await fetch(
                `${process.env.cms_path}contact-form-responses`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `bearer ${process.env.cms_key}`
                    },
                    body: JSON.stringify(data),
                }
            );

            if (response.ok) {
                resolve({ success: true });
            } else {
                let json = await response.json();
                console.log(json);
                reject({ error: response.statusText });
            }
        } catch (error) {
            reject({ error });
        }
    });
};
