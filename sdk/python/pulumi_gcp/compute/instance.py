# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import pulumi
import pulumi.runtime
from .. import utilities, tables

class Instance(pulumi.CustomResource):
    """
    Manages a VM instance resource within GCE. For more information see
    [the official documentation](https://cloud.google.com/compute/docs/instances)
    and
    [API](https://cloud.google.com/compute/docs/reference/latest/instances).
    
    """
    def __init__(__self__, __name__, __opts__=None, allow_stopping_for_update=None, attached_disks=None, boot_disk=None, can_ip_forward=None, create_timeout=None, deletion_protection=None, description=None, guest_accelerators=None, labels=None, machine_type=None, metadata=None, metadata_startup_script=None, min_cpu_platform=None, name=None, network_interfaces=None, project=None, scheduling=None, scratch_disks=None, service_account=None, tags=None, zone=None):
        """Create a Instance resource with the given unique name, props, and options."""
        if not __name__:
            raise TypeError('Missing resource name argument (for URN creation)')
        if not isinstance(__name__, str):
            raise TypeError('Expected resource name to be a string')
        if __opts__ and not isinstance(__opts__, pulumi.ResourceOptions):
            raise TypeError('Expected resource options to be a ResourceOptions instance')

        __props__ = dict()

        __props__['allow_stopping_for_update'] = allow_stopping_for_update

        __props__['attached_disks'] = attached_disks

        if not boot_disk:
            raise TypeError('Missing required property boot_disk')
        __props__['boot_disk'] = boot_disk

        __props__['can_ip_forward'] = can_ip_forward

        __props__['create_timeout'] = create_timeout

        __props__['deletion_protection'] = deletion_protection

        __props__['description'] = description

        __props__['guest_accelerators'] = guest_accelerators

        __props__['labels'] = labels

        if not machine_type:
            raise TypeError('Missing required property machine_type')
        __props__['machine_type'] = machine_type

        __props__['metadata'] = metadata

        __props__['metadata_startup_script'] = metadata_startup_script

        __props__['min_cpu_platform'] = min_cpu_platform

        __props__['name'] = name

        if not network_interfaces:
            raise TypeError('Missing required property network_interfaces')
        __props__['network_interfaces'] = network_interfaces

        __props__['project'] = project

        __props__['scheduling'] = scheduling

        __props__['scratch_disks'] = scratch_disks

        __props__['service_account'] = service_account

        __props__['tags'] = tags

        __props__['zone'] = zone

        __props__['cpu_platform'] = None
        __props__['instance_id'] = None
        __props__['label_fingerprint'] = None
        __props__['metadata_fingerprint'] = None
        __props__['self_link'] = None
        __props__['tags_fingerprint'] = None

        super(Instance, __self__).__init__(
            'gcp:compute/instance:Instance',
            __name__,
            __props__,
            __opts__)


    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

