// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * Three different resources help you manage your IAM policy for KMS key ring. Each of these resources serves a different use case:
 * 
 * * `google_kms_key_ring_iam_policy`: Authoritative. Sets the IAM policy for the key ring and replaces any existing policy already attached.
 * * `google_kms_key_ring_iam_binding`: Authoritative for a given role. Updates the IAM policy to grant a role to a list of members. Other roles within the IAM policy for the key ring are preserved.
 * * `google_kms_key_ring_iam_member`: Non-authoritative. Updates the IAM policy to grant a role to a new member. Other members for the role for the key ring are preserved.
 * 
 * ~> **Note:** `google_kms_key_ring_iam_policy` **cannot** be used in conjunction with `google_kms_key_ring_iam_binding` and `google_kms_key_ring_iam_member` or they will fight over what your policy should be.
 * 
 * ~> **Note:** `google_kms_key_ring_iam_binding` resources **can be** used in conjunction with `google_kms_key_ring_iam_member` resources **only if** they do not grant privilege to the same role.
 */
export class KeyRingIAMBinding extends pulumi.CustomResource {
    /**
     * Get an existing KeyRingIAMBinding resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: KeyRingIAMBindingState): KeyRingIAMBinding {
        return new KeyRingIAMBinding(name, <any>state, { id });
    }

    /**
     * (Computed) The etag of the key ring's IAM policy.
     */
    public /*out*/ readonly etag: pulumi.Output<string>;
    /**
     * The key ring ID, in the form
     * `{project_id}/{location_name}/{key_ring_name}` or
     * `{location_name}/{key_ring_name}`. In the second form, the provider's
     * project setting will be used as a fallback.
     */
    public readonly keyRingId: pulumi.Output<string>;
    public readonly members: pulumi.Output<string[]>;
    /**
     * The role that should be applied. Only one
     * `google_kms_key_ring_iam_binding` can be used per role. Note that custom roles must be of the format
     * `[projects|organizations]/{parent-name}/roles/{role-name}`.
     */
    public readonly role: pulumi.Output<string>;

    /**
     * Create a KeyRingIAMBinding resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: KeyRingIAMBindingArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: KeyRingIAMBindingArgs | KeyRingIAMBindingState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state: KeyRingIAMBindingState = argsOrState as KeyRingIAMBindingState | undefined;
            inputs["etag"] = state ? state.etag : undefined;
            inputs["keyRingId"] = state ? state.keyRingId : undefined;
            inputs["members"] = state ? state.members : undefined;
            inputs["role"] = state ? state.role : undefined;
        } else {
            const args = argsOrState as KeyRingIAMBindingArgs | undefined;
            if (!args || args.keyRingId === undefined) {
                throw new Error("Missing required property 'keyRingId'");
            }
            if (!args || args.members === undefined) {
                throw new Error("Missing required property 'members'");
            }
            if (!args || args.role === undefined) {
                throw new Error("Missing required property 'role'");
            }
            inputs["keyRingId"] = args ? args.keyRingId : undefined;
            inputs["members"] = args ? args.members : undefined;
            inputs["role"] = args ? args.role : undefined;
            inputs["etag"] = undefined /*out*/;
        }
        super("gcp:kms/keyRingIAMBinding:KeyRingIAMBinding", name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering KeyRingIAMBinding resources.
 */
export interface KeyRingIAMBindingState {
    /**
     * (Computed) The etag of the key ring's IAM policy.
     */
    readonly etag?: pulumi.Input<string>;
    /**
     * The key ring ID, in the form
     * `{project_id}/{location_name}/{key_ring_name}` or
     * `{location_name}/{key_ring_name}`. In the second form, the provider's
     * project setting will be used as a fallback.
     */
    readonly keyRingId?: pulumi.Input<string>;
    readonly members?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The role that should be applied. Only one
     * `google_kms_key_ring_iam_binding` can be used per role. Note that custom roles must be of the format
     * `[projects|organizations]/{parent-name}/roles/{role-name}`.
     */
    readonly role?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a KeyRingIAMBinding resource.
 */
export interface KeyRingIAMBindingArgs {
    /**
     * The key ring ID, in the form
     * `{project_id}/{location_name}/{key_ring_name}` or
     * `{location_name}/{key_ring_name}`. In the second form, the provider's
     * project setting will be used as a fallback.
     */
    readonly keyRingId: pulumi.Input<string>;
    readonly members: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The role that should be applied. Only one
     * `google_kms_key_ring_iam_binding` can be used per role. Note that custom roles must be of the format
     * `[projects|organizations]/{parent-name}/roles/{role-name}`.
     */
    readonly role: pulumi.Input<string>;
}
