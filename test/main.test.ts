import CreateHash from "../src/CreateHash";
test("Deve criar um hash", function () {
    const textHash = "2024-06-29;2024-06-29T16:53:59;FR 2024/1;200.00;";
    const privateKeyPem = `-----BEGIN RSA PRIVATE KEY-----
MIICXAIBAAKBgQDWCvQ3GM1IPRC7cQlwdYHTbmqiOBklVzAciKSM+ph7Cg5leg6p
rgogxXlR8HR7LEzGKjNuYV5paamHvoKcpg4I9RHY8tMgBWgr4xKu3mI0rIlqxwqH
Br28+JObzQ8HK+HLytPMJaYVAYF2jZKllXlzPWuICMYXgy/+RhJgwHK7BQIDAQAB
AoGBAMj0u9jGxmUeQAlb1TrqeBtjvWXUOXefZiJEAAoEdQh/poiLkhyotAWUoZTW
puXF78bVdDgb3qIle+9gZAxisyTp2GL6c1jlN3/cUaGfAPAjp2l0NZ4n23Ec2fd7
QoQF0U4I2KAP1PZRfx7/PSftBE4nWs3DCHNrHX5o4m091GkBAkEA88xwDzcOicYX
ybHaPEn0CprWSLTAA4hZnNwVn4L8di76liictXduaSYLFTIMQl3OkH1hpb/0f/PI
cqQ5D3cp5QJBAODBSH3MkQ904+U/ln8eX0B8In7SUYUpWgmQ6aKs6/HyRl3n0VUe
G5JmyNC46AibmdfBVgBGrHaN2/seYTS9uqECQFH5Z6R2CrlglhcHai3jX99A+NQx
km6dpiQMDGk6DdFfMnrS5P5PThyk4g0aauzVxeLnhbHJvVhYjAmgFl+Q3dECQAqz
KPBUPNOvjOntDQ0gNQis4DeJa7gbL94kt/q2oMTz88Wks6KJvGZL3mORafp+7eQH
oECDHNLIDiD2YUpRfgECQHsEUgtBo2hyt4gdwI+yo9RCZ1TLFMKLDlp/puo16eNj
4Iw1WfMck1Pud1M7UaiXJtmWSPTLVXoQ8LQXbFcWNkw=
-----END RSA PRIVATE KEY-----`;

    const createHash = new CreateHash();
    const output = createHash.execute(textHash, privateKeyPem)
    expect(output).toBe("hIo19xaMAjXeVlm3VaTCZsB3LhIjU1qmIjJ8VxB5Ink0L0KPUAp5R+j4xGsCvsID/Q230RB4KJcNeQpK6wZk5iNXSwOSvu3fX8K/b8uhqzrfuVKenfbWIQbVvLUyw0tfqK4GMcusff3dwesuMfWtYvZqAAsiiYPomwwajVhy6Og=")
})