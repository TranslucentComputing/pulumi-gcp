// *** WARNING: this file was generated by the Lumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as lumi from "@lumi/lumi";
import * as lumirt from "@lumi/lumirt";

export class User extends lumi.NamedResource implements UserArgs {
    public readonly host: string;
    public readonly instance: string;
    public readonly userName?: string;
    public readonly password: string;
    public readonly project?: string;

    constructor(name: string, args: UserArgs) {
        super(name);
        if (lumirt.defaultIfComputed(args.host, "") === undefined) {
            throw new Error("Property argument 'host' is required, but was missing");
        }
        this.host = args.host;
        if (lumirt.defaultIfComputed(args.instance, "") === undefined) {
            throw new Error("Property argument 'instance' is required, but was missing");
        }
        this.instance = args.instance;
        this.userName = args.userName;
        if (lumirt.defaultIfComputed(args.password, "") === undefined) {
            throw new Error("Property argument 'password' is required, but was missing");
        }
        this.password = args.password;
        this.project = args.project;
    }
}

export interface UserArgs {
    readonly host: string;
    readonly instance: string;
    readonly userName?: string;
    readonly password: string;
    readonly project?: string;
}
