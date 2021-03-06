// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

export class Attestor extends pulumi.CustomResource {
    /**
     * Get an existing Attestor resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: AttestorState): Attestor {
        return new Attestor(name, <any>state, { id });
    }

    public readonly attestationAuthorityNote: pulumi.Output<{ delegationServiceAccountEmail: string, noteReference: string, publicKeys?: { asciiArmoredPgpPublicKey: string, comment?: string, id: string }[] }>;
    public readonly description: pulumi.Output<string | undefined>;
    public readonly name: pulumi.Output<string>;
    public readonly project: pulumi.Output<string>;

    /**
     * Create a Attestor resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AttestorArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: AttestorArgs | AttestorState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state: AttestorState = argsOrState as AttestorState | undefined;
            inputs["attestationAuthorityNote"] = state ? state.attestationAuthorityNote : undefined;
            inputs["description"] = state ? state.description : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["project"] = state ? state.project : undefined;
        } else {
            const args = argsOrState as AttestorArgs | undefined;
            if (!args || args.attestationAuthorityNote === undefined) {
                throw new Error("Missing required property 'attestationAuthorityNote'");
            }
            inputs["attestationAuthorityNote"] = args ? args.attestationAuthorityNote : undefined;
            inputs["description"] = args ? args.description : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["project"] = args ? args.project : undefined;
        }
        super("gcp:binaryauthorization/attestor:Attestor", name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering Attestor resources.
 */
export interface AttestorState {
    readonly attestationAuthorityNote?: pulumi.Input<{ delegationServiceAccountEmail?: pulumi.Input<string>, noteReference: pulumi.Input<string>, publicKeys?: pulumi.Input<pulumi.Input<{ asciiArmoredPgpPublicKey: pulumi.Input<string>, comment?: pulumi.Input<string>, id?: pulumi.Input<string> }>[]> }>;
    readonly description?: pulumi.Input<string>;
    readonly name?: pulumi.Input<string>;
    readonly project?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a Attestor resource.
 */
export interface AttestorArgs {
    readonly attestationAuthorityNote: pulumi.Input<{ delegationServiceAccountEmail?: pulumi.Input<string>, noteReference: pulumi.Input<string>, publicKeys?: pulumi.Input<pulumi.Input<{ asciiArmoredPgpPublicKey: pulumi.Input<string>, comment?: pulumi.Input<string>, id?: pulumi.Input<string> }>[]> }>;
    readonly description?: pulumi.Input<string>;
    readonly name?: pulumi.Input<string>;
    readonly project?: pulumi.Input<string>;
}
