# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import pulumi
import pulumi.runtime
from .. import utilities, tables

class Job(pulumi.CustomResource):
    """
    Manages a job resource within a Dataproc cluster within GCE. For more information see
    [the official dataproc documentation](https://cloud.google.com/dataproc/).
    
    !> **Note:** This resource does not support 'update' and changing any attributes will cause the resource to be recreated.
    """
    def __init__(__self__, __name__, __opts__=None, force_delete=None, hadoop_config=None, hive_config=None, labels=None, pig_config=None, placement=None, project=None, pyspark_config=None, reference=None, region=None, scheduling=None, spark_config=None, sparksql_config=None):
        """Create a Job resource with the given unique name, props, and options."""
        if not __name__:
            raise TypeError('Missing resource name argument (for URN creation)')
        if not isinstance(__name__, str):
            raise TypeError('Expected resource name to be a string')
        if __opts__ and not isinstance(__opts__, pulumi.ResourceOptions):
            raise TypeError('Expected resource options to be a ResourceOptions instance')

        __props__ = dict()

        __props__['force_delete'] = force_delete

        __props__['hadoop_config'] = hadoop_config

        __props__['hive_config'] = hive_config

        __props__['labels'] = labels

        __props__['pig_config'] = pig_config

        if not placement:
            raise TypeError('Missing required property placement')
        __props__['placement'] = placement

        __props__['project'] = project

        __props__['pyspark_config'] = pyspark_config

        __props__['reference'] = reference

        __props__['region'] = region

        __props__['scheduling'] = scheduling

        __props__['spark_config'] = spark_config

        __props__['sparksql_config'] = sparksql_config

        __props__['driver_controls_files_uri'] = None
        __props__['driver_output_resource_uri'] = None
        __props__['status'] = None

        super(Job, __self__).__init__(
            'gcp:dataproc/job:Job',
            __name__,
            __props__,
            __opts__)


    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

