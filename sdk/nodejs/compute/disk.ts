// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

export class Disk extends pulumi.CustomResource {
    /**
     * Get an existing Disk resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DiskState): Disk {
        return new Disk(name, <any>state, { id });
    }

    public /*out*/ readonly creationTimestamp: pulumi.Output<string>;
    public readonly description: pulumi.Output<string | undefined>;
    public readonly diskEncryptionKey: pulumi.Output<{ rawKey?: string, sha256: string } | undefined>;
    public readonly diskEncryptionKeyRaw: pulumi.Output<string | undefined>;
    public /*out*/ readonly diskEncryptionKeySha256: pulumi.Output<string>;
    public readonly image: pulumi.Output<string | undefined>;
    public /*out*/ readonly labelFingerprint: pulumi.Output<string>;
    public readonly labels: pulumi.Output<{[key: string]: string} | undefined>;
    public /*out*/ readonly lastAttachTimestamp: pulumi.Output<string>;
    public /*out*/ readonly lastDetachTimestamp: pulumi.Output<string>;
    public readonly name: pulumi.Output<string>;
    /**
     * The ID of the project in which the resource belongs.
     * If it is not provided, the provider project is used.
     */
    public readonly project: pulumi.Output<string>;
    /**
     * The URI of the created resource.
     */
    public /*out*/ readonly selfLink: pulumi.Output<string>;
    public readonly size: pulumi.Output<number>;
    public readonly snapshot: pulumi.Output<string | undefined>;
    public readonly sourceImageEncryptionKey: pulumi.Output<{ rawKey?: string, sha256: string } | undefined>;
    public /*out*/ readonly sourceImageId: pulumi.Output<string>;
    public readonly sourceSnapshotEncryptionKey: pulumi.Output<{ rawKey?: string, sha256: string } | undefined>;
    public /*out*/ readonly sourceSnapshotId: pulumi.Output<string>;
    public readonly type: pulumi.Output<string | undefined>;
    public /*out*/ readonly users: pulumi.Output<string[]>;
    public readonly zone: pulumi.Output<string>;

    /**
     * Create a Disk resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: DiskArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: DiskArgs | DiskState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state: DiskState = argsOrState as DiskState | undefined;
            inputs["creationTimestamp"] = state ? state.creationTimestamp : undefined;
            inputs["description"] = state ? state.description : undefined;
            inputs["diskEncryptionKey"] = state ? state.diskEncryptionKey : undefined;
            inputs["diskEncryptionKeyRaw"] = state ? state.diskEncryptionKeyRaw : undefined;
            inputs["diskEncryptionKeySha256"] = state ? state.diskEncryptionKeySha256 : undefined;
            inputs["image"] = state ? state.image : undefined;
            inputs["labelFingerprint"] = state ? state.labelFingerprint : undefined;
            inputs["labels"] = state ? state.labels : undefined;
            inputs["lastAttachTimestamp"] = state ? state.lastAttachTimestamp : undefined;
            inputs["lastDetachTimestamp"] = state ? state.lastDetachTimestamp : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["project"] = state ? state.project : undefined;
            inputs["selfLink"] = state ? state.selfLink : undefined;
            inputs["size"] = state ? state.size : undefined;
            inputs["snapshot"] = state ? state.snapshot : undefined;
            inputs["sourceImageEncryptionKey"] = state ? state.sourceImageEncryptionKey : undefined;
            inputs["sourceImageId"] = state ? state.sourceImageId : undefined;
            inputs["sourceSnapshotEncryptionKey"] = state ? state.sourceSnapshotEncryptionKey : undefined;
            inputs["sourceSnapshotId"] = state ? state.sourceSnapshotId : undefined;
            inputs["type"] = state ? state.type : undefined;
            inputs["users"] = state ? state.users : undefined;
            inputs["zone"] = state ? state.zone : undefined;
        } else {
            const args = argsOrState as DiskArgs | undefined;
            inputs["description"] = args ? args.description : undefined;
            inputs["diskEncryptionKey"] = args ? args.diskEncryptionKey : undefined;
            inputs["diskEncryptionKeyRaw"] = args ? args.diskEncryptionKeyRaw : undefined;
            inputs["image"] = args ? args.image : undefined;
            inputs["labels"] = args ? args.labels : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["project"] = args ? args.project : undefined;
            inputs["size"] = args ? args.size : undefined;
            inputs["snapshot"] = args ? args.snapshot : undefined;
            inputs["sourceImageEncryptionKey"] = args ? args.sourceImageEncryptionKey : undefined;
            inputs["sourceSnapshotEncryptionKey"] = args ? args.sourceSnapshotEncryptionKey : undefined;
            inputs["type"] = args ? args.type : undefined;
            inputs["zone"] = args ? args.zone : undefined;
            inputs["creationTimestamp"] = undefined /*out*/;
            inputs["diskEncryptionKeySha256"] = undefined /*out*/;
            inputs["labelFingerprint"] = undefined /*out*/;
            inputs["lastAttachTimestamp"] = undefined /*out*/;
            inputs["lastDetachTimestamp"] = undefined /*out*/;
            inputs["selfLink"] = undefined /*out*/;
            inputs["sourceImageId"] = undefined /*out*/;
            inputs["sourceSnapshotId"] = undefined /*out*/;
            inputs["users"] = undefined /*out*/;
        }
        super("gcp:compute/disk:Disk", name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering Disk resources.
 */
export interface DiskState {
    readonly creationTimestamp?: pulumi.Input<string>;
    readonly description?: pulumi.Input<string>;
    readonly diskEncryptionKey?: pulumi.Input<{ rawKey?: pulumi.Input<string>, sha256?: pulumi.Input<string> }>;
    readonly diskEncryptionKeyRaw?: pulumi.Input<string>;
    readonly diskEncryptionKeySha256?: pulumi.Input<string>;
    readonly image?: pulumi.Input<string>;
    readonly labelFingerprint?: pulumi.Input<string>;
    readonly labels?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    readonly lastAttachTimestamp?: pulumi.Input<string>;
    readonly lastDetachTimestamp?: pulumi.Input<string>;
    readonly name?: pulumi.Input<string>;
    /**
     * The ID of the project in which the resource belongs.
     * If it is not provided, the provider project is used.
     */
    readonly project?: pulumi.Input<string>;
    /**
     * The URI of the created resource.
     */
    readonly selfLink?: pulumi.Input<string>;
    readonly size?: pulumi.Input<number>;
    readonly snapshot?: pulumi.Input<string>;
    readonly sourceImageEncryptionKey?: pulumi.Input<{ rawKey?: pulumi.Input<string>, sha256?: pulumi.Input<string> }>;
    readonly sourceImageId?: pulumi.Input<string>;
    readonly sourceSnapshotEncryptionKey?: pulumi.Input<{ rawKey?: pulumi.Input<string>, sha256?: pulumi.Input<string> }>;
    readonly sourceSnapshotId?: pulumi.Input<string>;
    readonly type?: pulumi.Input<string>;
    readonly users?: pulumi.Input<pulumi.Input<string>[]>;
    readonly zone?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a Disk resource.
 */
export interface DiskArgs {
    readonly description?: pulumi.Input<string>;
    readonly diskEncryptionKey?: pulumi.Input<{ rawKey?: pulumi.Input<string>, sha256?: pulumi.Input<string> }>;
    readonly diskEncryptionKeyRaw?: pulumi.Input<string>;
    readonly image?: pulumi.Input<string>;
    readonly labels?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    readonly name?: pulumi.Input<string>;
    /**
     * The ID of the project in which the resource belongs.
     * If it is not provided, the provider project is used.
     */
    readonly project?: pulumi.Input<string>;
    readonly size?: pulumi.Input<number>;
    readonly snapshot?: pulumi.Input<string>;
    readonly sourceImageEncryptionKey?: pulumi.Input<{ rawKey?: pulumi.Input<string>, sha256?: pulumi.Input<string> }>;
    readonly sourceSnapshotEncryptionKey?: pulumi.Input<{ rawKey?: pulumi.Input<string>, sha256?: pulumi.Input<string> }>;
    readonly type?: pulumi.Input<string>;
    readonly zone?: pulumi.Input<string>;
}
