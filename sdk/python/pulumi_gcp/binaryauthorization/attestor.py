# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import pulumi
import pulumi.runtime
from .. import utilities, tables

class Attestor(pulumi.CustomResource):
    def __init__(__self__, __name__, __opts__=None, attestation_authority_note=None, description=None, name=None, project=None):
        """Create a Attestor resource with the given unique name, props, and options."""
        if not __name__:
            raise TypeError('Missing resource name argument (for URN creation)')
        if not isinstance(__name__, str):
            raise TypeError('Expected resource name to be a string')
        if __opts__ and not isinstance(__opts__, pulumi.ResourceOptions):
            raise TypeError('Expected resource options to be a ResourceOptions instance')

        __props__ = dict()

        if not attestation_authority_note:
            raise TypeError('Missing required property attestation_authority_note')
        __props__['attestation_authority_note'] = attestation_authority_note

        __props__['description'] = description

        __props__['name'] = name

        __props__['project'] = project

        super(Attestor, __self__).__init__(
            'gcp:binaryauthorization/attestor:Attestor',
            __name__,
            __props__,
            __opts__)


    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

