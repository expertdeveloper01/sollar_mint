import { Checkbox, FormControl, FormControlLabel, FormGroup } from "@mui/material";
import { useState } from "react";



export default function Tags() {

    const [tags, setTags] = useState({
        art: true,
        application: false,
        design: false,
        entertainment: false,
        memes: false,
        crypto: false,
        music: false,
        print: false
    });

    const { art, application, design, entertainment, memes, crypto, music, print } = tags;

    const handleFlavorChange = (event) => {
        setTags({ ...tags, [event.target.name]: event.target.checked });
    };

    return (
        <div>
            <FormControl component="fieldset">
                <FormGroup row className="check_value">
                    <FormControlLabel
                        control={
                            <Checkbox

                                checked={art}
                                onChange={handleFlavorChange}
                                name="art"
                            />
                        }
                        label="Art"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={application}
                                onChange={handleFlavorChange}
                                name="application"
                            />
                        }
                        label="Application"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={design}
                                onChange={handleFlavorChange}
                                name="design"
                            />
                        }
                        label="Design"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={entertainment}
                                onChange={handleFlavorChange}
                                name="entertainment"
                            />
                        }
                        label="Entertainment"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={memes}
                                onChange={handleFlavorChange}
                                name="memes"
                            />
                        }
                        label="Memes"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={crypto}
                                onChange={handleFlavorChange}
                                name="crypto"
                            />
                        }
                        label="Crypto"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={music}
                                onChange={handleFlavorChange}
                                name="music"
                            />
                        }
                        label="Music"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={print}
                                onChange={handleFlavorChange}
                                name="print"
                            />
                        }
                        label="Print"
                    />
                </FormGroup>
            </FormControl>

        </div>
    )
}
