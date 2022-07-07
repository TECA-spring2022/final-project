import fetch from 'node-fetch';
import assert from 'assert';

it ('should get Hello', async ()=>{
    const responce  = await fetch('http://10.104.4.157 ');
    const text = await responce.text();
    assert.equal(text,"Hello");
})