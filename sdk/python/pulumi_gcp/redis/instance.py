# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import pulumi
import pulumi.runtime
from .. import utilities, tables

class Instance(pulumi.CustomResource):
    def __init__(__self__, __name__, __opts__=None, alternative_location_id=None, authorized_network=None, display_name=None, labels=None, location_id=None, memory_size_gb=None, name=None, project=None, redis_configs=None, redis_version=None, region=None, reserved_ip_range=None, tier=None):
        """Create a Instance resource with the given unique name, props, and options."""
        if not __name__:
            raise TypeError('Missing resource name argument (for URN creation)')
        if not isinstance(__name__, str):
            raise TypeError('Expected resource name to be a string')
        if __opts__ and not isinstance(__opts__, pulumi.ResourceOptions):
            raise TypeError('Expected resource options to be a ResourceOptions instance')

        __props__ = dict()

        __props__['alternative_location_id'] = alternative_location_id

        __props__['authorized_network'] = authorized_network

        __props__['display_name'] = display_name

        __props__['labels'] = labels

        __props__['location_id'] = location_id

        if not memory_size_gb:
            raise TypeError('Missing required property memory_size_gb')
        __props__['memory_size_gb'] = memory_size_gb

        __props__['name'] = name

        __props__['project'] = project

        __props__['redis_configs'] = redis_configs

        __props__['redis_version'] = redis_version

        __props__['region'] = region

        __props__['reserved_ip_range'] = reserved_ip_range

        __props__['tier'] = tier

        __props__['create_time'] = None
        __props__['current_location_id'] = None
        __props__['host'] = None
        __props__['port'] = None

        super(Instance, __self__).__init__(
            'gcp:redis/instance:Instance',
            __name__,
            __props__,
            __opts__)


    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

